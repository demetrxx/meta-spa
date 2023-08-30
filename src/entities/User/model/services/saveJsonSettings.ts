import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { JsonSettings } from '../types/jsonSettings';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettingsSelectors';

export const saveJsonSettings = createAsyncThunk<JsonSettings, JsonSettings, ThunkConfig<string>>(
  'user/saveJsonSettings',
  async (newJsonSettings, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const userAuthData = getUserAuthData(getState());
    const curJsonSettings = getJsonSettings(getState());

    if (!userAuthData) return rejectWithValue('could not get userAuthData');

    const finalJsonSettings = { ...curJsonSettings, ...newJsonSettings };

    localStorage.setItem('json-settings', JSON.stringify(finalJsonSettings));

    return finalJsonSettings;

    // try {
    //   const response = await dispatch(setJsonSettingsMutation({
    //     userId: userAuthData.id,
    //     jsonSettings: { ...curJsonSettings, ...newJsonSettings },
    //   })).unwrap();
    //
    //   if (!response.jsonSettings) return rejectWithValue(('error'));
    //
    //   return response.jsonSettings;
    // } catch (e) {
    //   return rejectWithValue(('error'));
    // }
  }
);
