import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../utils";
import ms from "../../../utils/ms";

const Event = ({event}) => {
    return (
        <View style={[ms.pdR(10)]}>
            <TouchableOpacity>
                <View style={{
                    width: 200,
                    height: 100,
                    backgroundColor: 'rgba(88, 193, 167, 1)',
                    borderColor: colors.primary,
                    borderRadius: 20,
                    // alignItems: 'center',
                    justifyContent:'flex-end',
                    padding: 10,
                    // flexDirection:'row'
                }}>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Text>{event?.nama}</Text>
                            <Text>22</Text>
                        </View>
                        <View>
                            {/* <Text>Hai</Text> */}
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default Event;