import React from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { CATEGORY_FORM } from 'src/constants/forms';
import IconInput from '../IconField';
import SelectInput from '../SelectInputField';
import TextInput from '../TextInputField';
import options from './CategoryFormOptions';
import validate from './validate';
import { PrimaryButton } from 'src/components';
import { margins } from 'src/styles'

function CategoryForm({ handleSubmit, submitting, invalid, createCategory }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.fields}>
                <View style={styles.row}>
                    <Field
                        name="icon"
                        style={styles.icon}
                        component={IconInput}
                    />
                    <View style={styles.flexGrow}>
                        <Field
                            name="name"
                            props={{
                                label: 'Category name',
                                placeholder: 'Enter category name...'
                            }}
                            component={TextInput}
                        />
                    </View>
                </View>
                {
                    createCategory &&
                        <Field
                            name="categoryTypeId"
                            component={SelectInput}
                            options={options.categoryType}
                        />
                }
            </View>
            <PrimaryButton
                disabled={invalid || submitting}
                onPress={handleSubmit}
                title={createCategory ? 'Create category' : 'Edit category'}
            />
        </ScrollView>
    );
}

export default reduxForm({
    form: CATEGORY_FORM,
    validate
})(CategoryForm);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        width: 300
    },
    row :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flexGrow: {
        flexGrow: 1
    },
    fields: {
        marginBottom: 50
    },
    icon: {
        marginRight: margins.MARGIN_M
    }
});
