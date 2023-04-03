import * as React from 'react';
import { Text as AppText } from 'react-native-paper';

interface TextProps {
    variant: string,
    content: string
}

const Text = ({ variant, content }) => (
    <AppText variant={variant}>
        {content}
    </AppText>
);

export default Text;