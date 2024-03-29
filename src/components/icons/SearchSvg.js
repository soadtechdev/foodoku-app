import React from 'react'
import Svg, { Path, G, Ellipse } from "react-native-svg"

export default function SvgSearch (props) {
    return (
        <Svg
            viewBox="0 0 22 20"
            style={{
                width: 22,
                height: 20,
            }}
            {...props}
        >
            <G id="App" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G id="App-01" transform="translate(-28.000000, -141.000000)" fill="#000000" fill-rule="nonzero">
                    <G id="Group-2" transform="translate(20.000000, 133.000000)">
                        <G id="search" transform="translate(8.000000, 8.000000)">
                            <Path d="M19.38,17.019375 L14.6425,12.99 C14.1525,12.549375 13.62875,12.346875 13.205625,12.36625 C14.32375,11.05625 14.999375,9.356875 14.999375,7.499375 C14.999375,3.3575 11.64125,-0.000625 7.499375,-0.000625 C3.3575,-0.000625 -0.000625,3.3575 -0.000625,7.499375 C-0.000625,11.64125 3.3575,14.999375 7.499375,14.999375 C9.356875,14.999375 11.05625,14.32375 12.36625,13.205625 C12.346875,13.62875 12.549375,14.1525 12.99,14.6425 L17.019375,19.38 C17.709375,20.14625 18.83625,20.21125 19.52375,19.52375 C20.21125,18.83625 20.146875,17.709375 19.38,17.019375 Z M7.5,12.5 C4.73875,12.5 2.5,10.26125 2.5,7.5 C2.5,4.73875 4.73875,2.5 7.5,2.5 C10.26125,2.5 12.5,4.73875 12.5,7.5 C12.5,10.26125 10.26125,12.5 7.5,12.5 Z" id="Shape"></Path>
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
    )
}
