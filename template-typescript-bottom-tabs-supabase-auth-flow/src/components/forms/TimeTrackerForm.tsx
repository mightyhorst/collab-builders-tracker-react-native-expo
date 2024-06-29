import React from 'react';
import { View } from 'react-native';
import { Picker, Text, Section, SectionContent, TextInput } from 'react-native-rapi-ui';

export const TimeTrackerForm = () => {
    const [pickerValue, setPickerValue] = React.useState<string|null>(null);
    const [text, setText] = React.useState<string>('');
    const items = [
        { label: 'Front-end Developer', value: 'FED' },
        { label: 'Back-end Developer', value: 'BED' },
        { label: 'Full-stack Developer', value: 'FSD' },
    ];
    return (
        <Section style={{ 
            // marginHorizontal: 20, 
            // marginTop: 20,
            width: '100%',
            height: '100%',
        }}>
            <SectionContent
                style={{
                    width: '100%',
                    height: '100%',
                }}
            >
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Text style={{ marginBottom: 10 }}>Picker</Text>
                    <Picker
                        items={items}
                        value={pickerValue}
                        placeholder="Choose your role"
                        onValueChange={(val: string) => setPickerValue(val)}
                    />
                    <Text style={{ marginBottom: 10 }}>TextInput</Text>
                    <TextInput
                        placeholder="Enter your text"
                        value={text}
                        onChangeText={(val) => setText(val)}
                    />
                </View>
            </SectionContent>
        </Section>
    );
};

export default TimeTrackerForm;
