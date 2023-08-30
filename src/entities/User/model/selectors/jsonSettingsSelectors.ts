import { buildSelector } from 'shared/store';
import { StateSchema } from 'app/providers/store';
import { JsonSettings } from '../../model/types/jsonSettings';

const defaultSettings: JsonSettings = {};

export const [useJsonSettings, getJsonSettings] = buildSelector(
  (state) => state.user.authData?.jsonSettings ?? defaultSettings
);

export const [useJsonSettingsByKey, getJsonSettingsByKey] = buildSelector(
  (state: StateSchema, key: keyof JsonSettings) => state.user.authData?.jsonSettings?.[key]
);
