import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExampleExpoModuleViewProps } from './ExampleExpoModule.types';

const NativeView: React.ComponentType<ExampleExpoModuleViewProps> =
  requireNativeViewManager('ExampleExpoModule');

export default function ExampleExpoModuleView(props: ExampleExpoModuleViewProps) {
  return <NativeView {...props} />;
}
