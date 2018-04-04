import React from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { TRANSACTION_FORM } from 'src/constants/forms';
import moment from 'moment';
import SelectInput from '../SelectInputField';
import TextInput from '../TextInputField';
import DatePickerField from '../DatePickerField';
import validate from './validate';
import { PrimaryButton } from 'src/components';
import { normalizeDate } from 'src/utils'

function TransactionForm({
    handleSubmit,
    submitting,
    invalid,
    options,
    createTransaction
}) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.fields}>
                <Field
                    name="value"
                    props={{
                        label: 'Sum',
                        placeholder: 'Enter sum...'
                    }}
                    component={TextInput}
                />
                {
                    createTransaction &&
                        [
                            <Field
                                key="accountId"
                                name="accountId"
                                component={SelectInput}
                                props={{
                                    label: 'Account',
                                    options: options.accounts
                                }}
                            />,
                            <Field
                                key="categoryId"
                                name="categoryId"
                                component={SelectInput}
                                props={{
                                    label: 'Category',
                                    options: options.categories
                                }}
                            />
                        ]
                }
                <Field
                    name="date"
                    props={{
                        label: 'Date'
                    }}
                    format={value => moment(value).format('MM/DD/YYYY')}
                    normalize={normalizeDate}
                    component={DatePickerField}
                />
                <Field
                    name="note"
                    props={{
                        label: 'Note',
                        placeholder: 'Enter note...'
                    }}
                    component={TextInput}
                />
            </View>
            <PrimaryButton
                disabled={invalid || submitting}
                onPress={handleSubmit}
                title={createTransaction ? 'Add transaction' : 'Save changes'}
            />
        </ScrollView>
    );
}

export default reduxForm({
    form: TRANSACTION_FORM,
    initialValues: {
        date: new Date().toUTCString()
    },
    validate
})(TransactionForm);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        width: 300
    },
    fields: {
        marginBottom: 50
    }
});
