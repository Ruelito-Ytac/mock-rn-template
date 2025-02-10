
## Install Node Modules
```sh
npm install --legacy-peer-deps # Run using `sudo` if needed
```
## Start `development` Server
```sh
npx expo start --dev-client --clear
```
<br/>

## Installing new packages/libraries
When new packages/libraries cannot run on Expo Go on the simulator, you need to prebuild the app for its respective simulator(s).

```
IF YOU NEED TO INJECT ENVIRONMENT VARIABLES INTO YOUR PREBUILT APP, 
MAKE SURE THAT THE CORRECT .env FILES HAVE BEEN CREATED BEFORE PROCEEDING
```

Make sure to login into your EAS account:

```
eas login
```

## Android Development
### Build APK for Play Store
```sh
NODE_ENV=test sudo eas build --profile production --platform android
```
### Push updates to Google Play Store
```sh
sudo eas update --platform android --auto
```
## iOS Development
### Install Pods for `ios`
On the `native-mobile` folder of the app, run on the terminal:
```sh
cd ios && sudo pod install --allow-root && cd ..
```
<br/>
<br/>

# Building Locally

## iOS Apps

### Troubleshooting Cannot run `pod install`

```sh
# You might need to uninstall `cocoapods`
sudo gem uninstall cocoapods

# Then:

brew install cocoapods
sudo chown -R $USER ~/Library/Caches/CocoaPods
sudo chown -R $USER ~/.cocoapods
```


### TLDR; Build .apk, .app, or .ipa Files Commands

```sh
# Compile app for Android Development build for simulator/device
sudo npm run android:dev

# Build staging version of app for Android devices
sudo npm run android:client

# Compile app for iOS Development build for simulator
sudo npm run ios:sim

# Compile app for iOS Development build for provisioned iOS Device
sudo npm run ios:dev
```

### Error: Distribution certificate with fingerprint XYZ hasn't been imported successfully

Download Distribution certificate from: [https://www.apple.com/certificateauthority/AppleWWDRCAG3.cer]

```
security add-trusted-cert -d -r unspecified -k ~/Library/Keychains/login.keychain-db ~/Downloads/AppleWWDRCAG3.cer
```

### Updating XCode
[https://developer.apple.com/documentation/xcode/installing-additional-simulator-runtimes]

Download runtime(s) from: https://developer.apple.com/download/all/?q=Simulator%20Runtime

```sh
sudo xcode-select -s /Applications
xcodebuild -runFirstLaunch
xcrun simctl runtime add "~/Downloads/iOS_17.5_Simulator_Runtime.dmg"
```