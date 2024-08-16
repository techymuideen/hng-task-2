import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingList,
  FloatingNode,
  FloatingPortal,
  FloatingTree,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useHover,
  useInteractions,
  useListItem,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTypeahead,
} from "@floating-ui/react";
import * as React from "react";

const MenuContext = React.createContext({
  getItemProps: () => ({}),
  activeIndex: null,
  setActiveIndex: () => {},
  setHasFocusInside: () => {},
  isOpen: false,
  setIsOpen: () => {},
});

// Menu Component
export const MenuComponent = React.forwardRef(
  ({ children, label, ...props }, forwardedRef) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(null);

    const elementsRef = React.useRef([]);
    const labelsRef = React.useRef([]);
    const parent = React.useContext(MenuContext);

    const tree = useFloatingTree();
    const nodeId = useFloatingNodeId();
    const parentId = useFloatingParentNodeId();
    const item = useListItem();

    const isNested = parentId != null;

    const { floatingStyles, refs, context } = useFloating({
      nodeId,
      open: isOpen,
      onOpenChange: setIsOpen,
      placement: isNested ? "right-start" : "bottom-start",
      middleware: [offset(4), flip(), shift()],
      whileElementsMounted: autoUpdate,
    });

    const click = useClick(context, {
      event: "mousedown",
      toggle: true,
    });
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: "menu" });
    const listNavigation = useListNavigation(context, {
      listRef: elementsRef,
      activeIndex,
      nested: isNested,
      onNavigate: setActiveIndex,
    });
    const typeahead = useTypeahead(context, {
      listRef: labelsRef,
      activeIndex,
      onMatch: isOpen ? setActiveIndex : undefined,
    });

    const { getReferenceProps, getFloatingProps, getItemProps } =
      useInteractions([click, dismiss, role, listNavigation, typeahead]);

    React.useEffect(() => {
      if (!tree) return;

      function handleTreeClick() {
        setIsOpen(false);
      }

      tree.events.on("click", handleTreeClick);

      return () => {
        tree.events.off("click", handleTreeClick);
      };
    }, [tree]);

    return (
      <FloatingNode id={nodeId}>
        <button
          ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
          className={isNested ? "MenuItem" : "RootMenu"}
          {...getReferenceProps()}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {label}
        </button>
        <MenuContext.Provider
          value={{
            activeIndex,
            setActiveIndex,
            getItemProps,
            isOpen,
            setIsOpen,
          }}
        >
          {isOpen && (
            <FloatingPortal>
              <FloatingFocusManager context={context} modal={false}>
                <div
                  ref={refs.setFloating}
                  className="Menu"
                  style={floatingStyles}
                  {...getFloatingProps()}
                >
                  {children}
                </div>
              </FloatingFocusManager>
            </FloatingPortal>
          )}
        </MenuContext.Provider>
      </FloatingNode>
    );
  }
);
MenuComponent.displayName = "MenuComponent";

// MenuToggle Component (used to toggle the dropdown)
export const MenuToggle = React.forwardRef(
  ({ as: Component = "button", children, ...props }, forwardedRef) => {
    const { isOpen, setIsOpen } = React.useContext(MenuContext);

    return (
      <Component
        ref={forwardedRef}
        onClick={() => setIsOpen((prev) => !prev)}
        data-open={isOpen ? "" : undefined}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MenuToggle.displayName = "MenuToggle";

// MenuItem Component (each menu item inside the dropdown)
export const MenuItem = React.forwardRef(
  ({ label, disabled, ...props }, forwardedRef) => {
    const { getItemProps, activeIndex, setHasFocusInside } =
      React.useContext(MenuContext);
    const item = useListItem({ label });
    const isActive = item.index === activeIndex;

    return (
      <button
        {...props}
        ref={useMergeRefs([item.ref, forwardedRef])}
        type="button"
        role="menuitem"
        className={`MenuItem ${isActive ? "active" : ""}`}
        tabIndex={isActive ? 0 : -1}
        disabled={disabled}
        {...getItemProps({
          onClick(event) {
            props.onClick?.(event);
          },
          onFocus(event) {
            props.onFocus?.(event);
            setHasFocusInside(true);
          },
        })}
      >
        {label}
      </button>
    );
  }
);
MenuItem.displayName = "MenuItem";

// Root Menu Component
export const Menu = React.forwardRef((props, ref) => {
  const parentId = useFloatingParentNodeId();

  if (parentId === null) {
    return (
      <FloatingTree>
        <MenuComponent {...props} ref={ref} />
      </FloatingTree>
    );
  }

  return <MenuComponent {...props} ref={ref} />;
});
Menu.displayName = "Menu";
