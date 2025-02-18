import { useMemo } from 'react';
import useConfig from './useConfig';

export default function useCommonClassName() {
  const { classPrefix } = useConfig();

  return useMemo(() => {
    const names = {
      SIZE: {
        default: '',
        xs: `${classPrefix}-size-xs`,
        small: `${classPrefix}-size-s`,
        medium: `${classPrefix}-size-m`,
        large: `${classPrefix}-size-l`,
        xl: `${classPrefix}-size-xl`,
        block: `${classPrefix}-size-full-width`,
      },
      STATUS: {
        loading: `${classPrefix}-is-loading`,
        disabled: `${classPrefix}-is-disabled`,
        focused: `${classPrefix}-is-focused`,
        success: `${classPrefix}-is-success`,
        error: `${classPrefix}-is-error`,
        warning: `${classPrefix}-is-warning`,
        selected: `${classPrefix}-is-selected`,
        active: `${classPrefix}-is-active`,
        checked: `${classPrefix}-is-checked`,
        current: `${classPrefix}-is-current`,
        hidden: `${classPrefix}-is-hidden`,
        visible: `${classPrefix}-is-visible`,
        expanded: `${classPrefix}-is-expanded`,
        indeterminate: `${classPrefix}-is-indeterminate`,
      },
    };
    return {
      SIZE: names.SIZE,
      STATUS: names.STATUS,
      sizeClassNames: names.SIZE,
      statusClassNames: names.STATUS,
    };
  }, [classPrefix]);
}

export type CommonClassNameType = ReturnType<typeof useCommonClassName>;
