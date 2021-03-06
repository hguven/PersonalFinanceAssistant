/*
 * getDefaultNavigationOptions.js
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

import { StyleSheet, Platform } from 'react-native';
import { colors } from 'src/styles';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.COLOR_PRIMARY
  },
  title: {
    color: colors.COLOR_WHITE
  }
});

const getDefaultNavigationOptions = () => ({
  headerStyle: styles.header,
  headerTitleStyle: styles.title,
  headerTintColor: colors.COLOR_WHITE,
  safeAreaInsets: Platform.OS === 'android' ? { top: 0, bottom: 0 } : undefined
});

export default getDefaultNavigationOptions;
