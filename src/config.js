/*
 * config.js
 *
 * Copyright (c) 2017 Artsiom Staratsitarau
 *
 * This file is a part of PersonalFinanceAssistant.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import { Platform } from 'react-native';

const facebookLoginBehaviour = Platform.OS === 'android' ? 'web_only' : 'browser';

const DEVELOPERS = [
  {
    email: 'artem.starotitorov@gmail.com',
    name: 'Artsiom Staratsitarau'
  }
];

export default {
  appName: 'Money Tracker',
  appDescription: 'application for tracking expenses and incomes.',
  appSlogan: 'Personal finance tracking app',
  apiUrl: 'https://personalfinanceassistant.herokuapp.com',
  currencyConverterApiUrl: 'https://financeassistantconverter.herokuapp.com',
  developers: DEVELOPERS,
  facebookLoginBehaviour
};
