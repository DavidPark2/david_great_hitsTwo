import React from 'react'
import {NativeProgress, Colors} from 'react-foundation';

const Navbar = () => (
  <div className="native-progress-example">
    <NativeProgress max={100} value={75}/>
    <NativeProgress color={Colors.SECONDARY} max={100} value={75}/>
    <NativeProgress color={Colors.SUCCESS} max={100} value={75}/>
    <NativeProgress color={Colors.WARNING} max={100} value={75}/>
    <NativeProgress color={Colors.ALERT} max={100} value={75}/>
  </div>
)

export default Navbar