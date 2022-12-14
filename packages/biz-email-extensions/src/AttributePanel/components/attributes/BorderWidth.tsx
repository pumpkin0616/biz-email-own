import React, { useMemo } from 'react';
import { useFocusIdx } from 'biz-email-editor';
import { TextField } from '../../../components/Form';

export function BorderWidth() {
  const { focusIdx } = useFocusIdx();

  return useMemo(() => {
    return (
      <TextField
        label='Width'
        quickchange
        name={`${focusIdx}.attributes.border-width`}
      />
    );
  }, [focusIdx]);
}
