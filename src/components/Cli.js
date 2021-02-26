import React from 'react'
import '../index.css';


function Cli() {
    return (
        <div>
            <div className="wrapper" >
  <h1 >Tutorials</h1>

  <div className="box" id="npm">
    <h2>npx create react.js app</h2>
    <dl>
      <dt><code>&gt; npx create react-app my-app</code></dt>
      <dd>Creates react.js app</dd>
      <dt><code>&gt; cd my app</code></dt>
      <dd>Change directories - my app</dd>
      <dt><code>&gt; npm init -y</code></dt>
      <dd>Generate it without having it ask any questions</dd>
      <dt><code>&gt; npm install --save-dev webpack</code></dt>
      <dd>Install webpack and babel</dd>

      <dt><code>&gt; npm install -D babel-loader @babel/core @babel/preset-env webpack</code></dt>

    


    </dl>
  </div>
  <div className="box" id="cordova">
    <h2>cordova commands</h2>
    <dl>
      <dt><code>&gt; cordova create demo ca.edumedia.griffis.mydemo AppName</code></dt>
      <dd>Uses cordova to create your project in a folder called demo with the namespace ca.edumedia.griffis.mydemo . This name must be unique within the list of applications on the mobile device. AppName will be the name that appears beneath the launcher icon.</dd>
      <dt><code>&gt; cordova platform add android</code></dt>
      <dd>Change the last word in the command to load different platforms into your cordova project. You can type platform OR platforms.</dd>
      <dt><code>&gt; cordova platform rm android</code></dt>
      <dd>Remove the Android platform from the project. Also removes any plugins for the Android platform automatically.</dd>
      <dt><code>&gt; cordova platform ls</code></dt>
      <dd>Returns the list of all the platforms that have been previously installed within your Cordova project.</dd>
      <dt><code>&gt; cordova plugin add cordova-plugin-device</code></dt>
      <dd>The reverse url is used to load different plugins. Do this to add functionality into your cordova app.</dd>
      <dt><code>&gt; cordova plugin rm cordova-plugin-device</code></dt>
      <dd>Removes the plugin cordova-plugin-device from the project.</dd>
      <dt><code>&gt; cordova plugin ls</code></dt>
      <dd>Returns the list of all the plugins that have been previously installed within your Cordova project.</dd>
      <dt><code>&gt; cordova plugin search device</code></dt>
      <dd>Opens your default browser, navigates to the Cordova plugin page and displays the list of possible matches for your search word (in this case "device").</dd>
      <dt><code>&gt; cordova build android</code></dt>
      <dd>Compile your source code into the android .apk file.</dd>
      <dt><code>&gt; cordova run android --device</code></dt>
      <dd>Compile your source code into the android .apk file, install it on the connected android device (or emulator if no device is connected), and then launch the application where it was installed.</dd>
      <dt><code>&gt; cordova emulate android --target=myAdvName</code></dt>
      <dd>Compile and Launch your Android Cordova app in a specific AVD. See the android list avds command below.</dd>
      <dt><code>&gt; cordova emulate ios --target="iPhone-X, 12.1" --buildFlag="-UseModernBuildSystem=0"</code></dt>
      <dd>The command to launch and iOS Cordova app in the iOS Simulator. Note the <code>--target</code> flag which will specify which phone and OS version to launch the simulator with. Also note, if you are trying to launch an iOS app with versions 9 or below of Cordova you will need to specify the <code>--buildFlag</code> to use the old build system in XCode.</dd>
      <dt><code>&gt; cordova run ios --device --buildFlag="-UseModernBuildSystem=0"</code></dt>
      <dd>Using the <code>--device</code> flag will launch the app to a device. Just like the simulator you will need the <code>--buildFlag</code> to use the old XCode build system.</dd>
      <dt><code>&gt; cordova platform add browser</code></dt>
      <dd>Add the browser as a target for your project. A simple way of testing your interface.</dd>
      <dt><code>&gt; cordova run browser</code></dt>
      <dd>Once the browser is added to your cordova project then you can launch the app in your browser.</dd>
      <dt><code>&gt; cordova requirements android</code></dt>
      <dd>Check to see if your Cordova installation has all it needs for the specified platform.</dd>
      <dt><code>&gt; cordova prepare</code></dt>
      <dd>This command will read your config.xml file and attempt to install all the platforms and plugins that are detailed in that file.</dd>
    </dl>
  </div>
  <div className="box" id="android">
    <h2>android commands</h2>
    <dl>
      {/*
<dt><code>&gt; android</code></dt>
<dd>Launches the android manager</dd>
		 */}
      <dd>The <code>android</code> command is the old version. The replacement for the android command is the <code>avdmanager</code> command.</dd>
      {/* <code>&gt; android list target</code><br/> */}
      <dt><code>&gt; avdmanager list target</code></dt> 
      <dd>lists all the android APIs currently installed on your computer.</dd>
      {/* <code>&gt; android list avd</code><br/> */}
      <dt><code>&gt; avdmanager list avd</code></dt>
      <dd>Lists all the android virtual devices that you have created through the command line or the android manager.</dd>
      {/* <code>&gt; android create avd -n bob -t android-19</code><br/> */}
      <dt><code>&gt; avdmanager create avd -n bob -t android-19</code></dt>
      <dd>create a new android virtual device. bob is the name of the avd. android-19 is the version of the Android API used by the avd.</dd>
    </dl>
    <dl>
      <dt><code>&gt; sdkmanager --list</code></dt>
      <dd>List all the installed and available packages for the Android SDK.</dd>
      <dt><code>&gt; sdkmanager --update</code></dt>
      <dd>Update all the installed packages.</dd>
      <dt><code>&gt; sdkmanager "platform-tools" "platforms;android-28"</code></dt>
      <dd>Install one or more packages. This code sample will install the platform-tools AND android API version 28.</dd>
    </dl>
    <dl>
      <dt><code>&gt; monitor</code></dt>
      <dd><strong>**NOTE**: This has been replaced with `adb logcat`. See below for details.</strong> Launch the monitor program to watch what is happening in the emulator or connected android device.</dd>
    </dl>
  </div>
  <div className="box" id="adb">
    <h2>adb commands</h2>
    <dl>
      <dt><code>&gt; adb devices</code></dt>
      <dd>list all the emulators and physical android devices connected to the computer.</dd>
      <dt><code>&gt; adb install demo.apk</code></dt>
      <dd>install the file demo.apk onto a connected android emulator or device</dd>
      <dt><code>&gt; adb install -r  demo.apk</code></dt>
      <dd>install the file demo.apk onto a connected android emulator or device which has previously been installed. The -r stands for "reinstall".</dd>
      <dt><code>&gt; adb uninstall name-of-app-package</code></dt>
      <dd>uninstall an app from the android emulator or device.</dd>
      <dt><code>&gt; adb shell pm list packages</code></dt>
      <dd>list all the installed packages on the emulator or connected device. From this list you can get the package name for uninstalling.</dd>
      <dt><code>&gt; adb logcat</code></dt>
      <dt><code>&gt; adb logcat ActivityManager:I MyApp:D</code></dt>
      <dd>View a dump of all the device system logs from the command line. The second example shows how you can pass in one or more expressions to the logcat program that will filter the level of messages. "ActivityManager" and "MyApp" are the names of the activities to show. "I" and "D" are the priority level of the messages. You can choose from "V" - verbose, "D" - Debug, "I" - Info, "W" - Warning, "E" - Error, or "F" - Fatal.</dd>
    </dl>
  </div>
  <div className="box">
    <h2>Android Emulator commands</h2>
    <dl>
      <dt><code>&gt; emulator -avd bob</code></dt>
      <dd>Launch the android emulator and load a specific virtual device. In this example, bob is the name of the AVD that was created.</dd>
    </dl>

  </div>


  <div className="box" id="win-android-env">
    <h2>MacOS Environmental Variables for Android</h2>

  </div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br><br></br>
<br></br>
<br></br>
        </div>
    )
}

export default Cli
