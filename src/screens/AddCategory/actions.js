/*
 * actions.js
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

import { NavigationActions, StackActions } from 'react-navigation';
import get from 'lodash/get';
import * as api from 'src/api';
import { alerts } from 'src/utils';
import { INCOME_CATEGORIES_ROUTE_NAME } from '../CategoryTabs/constants';

export const addCategory = ({ categoryData, navigation }) => () => {
  const activeTab = get(navigation, 'state.params.activeTab', INCOME_CATEGORIES_ROUTE_NAME);

  return api.addCategory(categoryData)
    .then(() => {
      navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'CategoryTabs',
            action: NavigationActions.navigate({ routeName: activeTab })
          })
        ]
      }));
    })
    .catch(() => alerts.showCanNotPerformOperationAlert());
};
