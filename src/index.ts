import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExampleExpoModule.web.ts
// and on native platforms to ExampleExpoModule.ts
import ExampleExpoModule from './ExampleExpoModule';
import ExampleExpoModuleView from './ExampleExpoModuleView';
import { ChangeEventPayload, ExampleExpoModuleViewProps } from './ExampleExpoModule.types';

// Get the native constant value.
export const PI = ExampleExpoModule.PI;

export function hello(): string {
  return ExampleExpoModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExampleExpoModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExampleExpoModule ?? NativeModulesProxy.ExampleExpoModule);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExampleExpoModuleView, ExampleExpoModuleViewProps, ChangeEventPayload };
