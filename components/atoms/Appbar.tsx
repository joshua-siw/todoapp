import * as React from 'react';
import { Appbar as Topbar } from 'react-native-paper';


const Appbar = () => {
    return(
    <Topbar.Header>
    <Topbar.BackAction onPress={() => {}} />
    <Topbar.Content title="Title" />
    <Topbar.Action icon="calendar" onPress={() => {}} />
    <Topbar.Action icon="magnify" onPress={() => {}} />
    </Topbar.Header>
    )
} 

export default Appbar;

