import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// export default function Exercise1() {
//     return (
//         <View style={styles.container}>
//             <Text style={{ fontSize: 24 }}>RP Values</Text>
//             <Text style={{ color: 'green' }}>Excellence</Text>
//             <Text style={{ backgroundColor: 'yellow' }}>Customer-Centric</Text>
//             <Text style={{ fontStyle: 'italic' }}>Integrity</Text>
//             <Text style={{ textAlign: 'left' }}>Teamwork</Text>
//             <Text style={{ backgroundColor: 'black', color: 'white' }}>Enterprising</Text>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         paddingTop: 50,
//         paddingHorizontal: 20,
//     },
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// export default function Exercise2() {
//     return (
//         <View style={styles.container}>
//             <View style={styles.greenBox}>
//                 <Text style={[styles.boxText, styles.title]}>Who We Are</Text>
//             </View>
//             <View style={styles.greenBox}>
//                 <Text style={styles.boxText}>Our People</Text>
//             </View>
//             <View style={styles.greenBox}>
//                 <Text style={styles.boxText}>Our Campus</Text>
//             </View>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         paddingTop: 40,
//         alignItems: 'center',
//     },
//     greenBox: {
//         width: 100,
//         height: 100,
//         marginTop: 30,
//         backgroundColor: 'green',
//         borderWidth: 1,
//         borderColor: 'black',
//         justifyContent: 'center',
//     },
//     boxText: {
//         textAlign: 'center',
//         color: 'white',
//     },
//     title: {
//         fontWeight: 'bold',
//     },
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------


// export default function Exercise3A() {
//     return (
//         <View style={styles.Parent}>
//             <Text style={[styles.Child, { backgroundColor: 'powderblue' }]}>Child One</Text>
//             <Text style={[styles.Child, { backgroundColor: 'skyblue' }]}>Child Two</Text>
//             <Text style={[styles.Child, { backgroundColor: 'steelblue' }]}>Child Three</Text>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     Parent: {
//         flexDirection: 'row',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         marginTop: 50,
//     },
//     Child: {
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//     },
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------


// export default function Exercise3B() {
//     return (
//         <View style={styles.Parent}>
//             <Text style={[styles.Child, { backgroundColor: 'powderblue' }]}>Child One</Text>
//             <Text style={[styles.Child, { backgroundColor: 'skyblue' }]}>Child Two</Text>
//             <Text style={[styles.Child, { backgroundColor: 'steelblue' }]}>Child Three</Text>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     Parent: {
//         flex: 1,
//         flexDirection: 'column',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         marginTop: 40,
//     },
//     Child: {
//         flex: 1,
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//     },
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------


// export default function Exercise3C() {
//     return (
//         <View style={styles.Parent}>
//             <Text style={[styles.Child, { backgroundColor: 'powderblue', maxWidth: 90 }]}>Child One</Text>
//             <Text style={[styles.Child, { backgroundColor: 'skyblue' }]}>Child Two</Text>
//             <Text style={[styles.Child, { backgroundColor: 'steelblue', maxHeight: 120 }]}>Child Three</Text>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     Parent: {
//         flex: 1,
//         flexDirection: 'column',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         marginTop: 40,
//     },
//     Child: {
//         flex: 1,
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//     },
// });


// ------------------------------------------------------------------------------------------------------------------------------------------------------------


// export default function Exercise3D() {
//     return (
//         <View style={styles.Parent}>
//             <Text style={[styles.Child, { backgroundColor: 'powderblue', flex: 1 }]}>Child One</Text>
//             <Text style={[styles.Child, { backgroundColor: 'skyblue', flex: 2 }]}>Child Two</Text>
//             <Text style={[styles.Child, { backgroundColor: 'steelblue', flex: 3 }]}>Child Three</Text>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     Parent: {
//         flex: 1,
//         flexDirection: 'column',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         marginTop: 40,
//     },
//     Child: {
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//     },
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------


export default function Exercise3E() {
    return (
        <View style={styles.Parent}>
            <Text style={[styles.Child, { backgroundColor: 'powderblue' }]}>Child One</Text>
            <Text style={[styles.Child, { backgroundColor: 'skyblue' }]}>Child Two</Text>
            <Text style={[styles.Child, { backgroundColor: 'steelblue' }]}>Child Three</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Parent: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        marginTop: 40,

        // Uncomment one line at a time to test each layout:
        justifyContent: 'space-between',
        // justifyContent: 'flex-start',
        // justifyContent: 'flex-end',
        // justifyContent: 'space-around',
        // justifyContent: 'space-evenly',
    },
    Child: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
    },
});

// ------------------------------------------------------------------------------------------------------------------------------------------------------------


// export default function Exercise4() {
//     return (
//         <View style={styles.Parent}>
//             <View style={[styles.Child, { backgroundColor: '#7BC043' }]}>
//                 <Text style={styles.text}>Square 1</Text>
//             </View>
//             <View style={[styles.Child, { backgroundColor: '#03A9F4' }]}>
//                 <Text style={styles.text}>Square 2</Text>
//             </View>
//             <View style={[styles.Child, { backgroundColor: '#ED553B' }]}>
//                 <Text style={styles.text}>Square 3</Text>
//             </View>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     Parent: {
//         flex: 1,
//         backgroundColor: 'whitesmoke',
//         marginTop: 30,
//         flexDirection: 'row',
//         justifyContent: 'space-around', // Distributes squares evenly horizontally
//         alignItems: 'center',          // Centers squares vertically
//     },
//     Child: {
//         width: 80,
//         height: 80,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     text: {
//         color: '#000',
//     },
// });