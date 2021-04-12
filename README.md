## Folder Structure

We have three folders

- assets
- components
- screens


## How to integrate Google Places API
1. Create a Google Developer account.
2. Create a new Project on Google developer account.
3. Enable billing on your account.
4. Enable Google Places API.
5. Create an API key by going into your Project -> credentials.
6. Install react native google places library.
7. Import and start using it.

## How to integrate Google Maps
1. Create a Google Developer account.
2. Create a new Project on Google developer account.
3. Enable billing on your account.
4. Enable Google Maps API.
5. Get API key.
6. Install react native google maps library.
7. Import and start using it.

## How to create Lines on Google Maps
1. Install the library - react-native-maps-direction
2. 

## Troubleshooting

### [Error] - 'Multiple commands produce' error because of font related dependency

**Fix**

Modify `node_modules/react-native-vector-icons/react-native-config.js` to the following
```
module.exports = {
  dependency: {
    assets: [],
  },
};
```

Inside `node_modules/react-native-vector-icons/RNVectorIcons.podspec`, remove the `s.resources = "Fonts/*.ttf"` line entirely.

```
require 'json'
version = JSON.parse(File.read('package.json'))["version"]

Pod::Spec.new do |s|

  s.name           = "RNVectorIcons"
  s.version        = version
  s.summary        = "Customizable Icons for React Native with support for NavBar/TabBar, image source and full styling."
  s.homepage       = "https://github.com/oblador/react-native-vector-icons"
  s.license        = "MIT"
  s.author         = { "Joel Arvidsson" => "joel@oblador.se" }
  s.platforms      = { :ios => "9.0", :tvos => "9.0" }
  s.source         = { :git => "https://github.com/oblador/react-native-vector-icons.git", :tag => "v#{s.version}" }
  s.source_files   = 'RNVectorIconsManager/**/*.{h,m}'
  s.preserve_paths = "**/*.js"
  s.dependency 'React'

end
```

After this run

`cd ios && pod install && cd ..`

and then

`npx react-native link react-native-vector-icons`

and then build the app, it should run without any errors.
