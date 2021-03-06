# AstroLibrary

![logo](https://github.com/Astro36/AstroLibrary/blob/master/res/img_astro_library.png)

> ModPE integrated library

## Introduction

| Main 1 | Main 2 |
|:-:|:-:|
| ![main](https://github.com/Astro36/AstroLibrary/blob/master/res/img_main_0.png) | ![main](https://github.com/Astro36/AstroLibrary/blob/master/res/img_main_1.png) |

| Login | Sign Up |
|:-:|:-:
| ![login](https://github.com/Astro36/AstroLibrary/blob/master/res/img_login.png) | ![sign up](https://github.com/Astro36/AstroLibrary/blob/master/res/img_sign_up.png) |

| Account | Friend Manager |
|:-:|:-:|
| ![account](https://github.com/Astro36/AstroLibrary/blob/master/res/img_account.png) | ![friends_manager](https://github.com/Astro36/AstroLibrary/blob/master/res/img_friends_manager.png) |

| Player Manager | Setting |
|:-:|:-:|
| ![player_manager](https://github.com/Astro36/AstroLibrary/blob/master/res/img_player_manager.png) | ![settings](https://github.com/Astro36/AstroLibrary/blob/master/res/img_settings.png) |

This is ModPE integrated library for BlockLauncher.

## ChangeLog

### 1.0

- First release.

### 1.1

- Add `SplashWindow` class.
- Add `Bitmap.blur` method.
- Add `File.preventMediaScanning` method.
- Add `File.unzip` method.
- Fix friend manager (unstable).
- Remove debug mode and hash check feature.

### 1.2

- Add `ColorUtils` class.
- Add `ViewUtils` class.
- Add `Bitmap.decodeBase64` method.
- Add `Theme.getThemeObject` method.
- Add `getContext` method.
- Add `getPath` method.
- Improve `VerticalWindow` class.
- Improve `Layout` class.
- Improve `AddonManager.download` method.
- Improve `File.download` method.
- Fix JSDoc comments.
- Fix some bugs.

### 2.0

- Add `ColorPicker` class.
- Add `ColorPickerWindow` class.
- Add `Divider` class.
- Add `NotificationWindow` class.
- Add `ShowcaseWindow` class.
- Add `SquircleDrawable` class.
- Add `ColorUtils.setAlpha` method.
- Add `ScrollView.setWidth` method.
- Add `loadLibrary` method.
- Add border shadows at window.
- Add open notifications with gestures setting.
- Improve `VerticalWindow.setColor` method.
- Improve library loading system.
- Improve splash screen.
- Improve widget theme system.
- Fix `AddonManager.isInstalled` method.
- Fix the SD card path.
- Fix JSDoc comments.
- Fix some bugs.
- Remove `ScriptChecker` class.
- Remove `ScriptInfo` class.

### 2.1

- Add `FloatingWindow` class.
- Add `UserConnection` class.
- Add `Account.isRightFriend` method.
- Add `Account.getFriendDataFromServer` method.
- Add `Account.getMessagesFromServer` method.
- Add `Account.sendMessage` method.
- **Change parent object of window type classes;** `me.astro.widget` -> `me.astro.window`.
- **Change the class name;** `me.astro.widget.Window` -> `me.astro.window.PopupWindow`.
- Improve window type classes.
- Improve theme system, and `setWH` method.
- Fix friend window.
- Fix password undefined error.
- Fix JSDoc comments.
- Fix some bugs.
- Remove `UserServer` class.

## Documentation

Information for library API:

### 1.0

[Documents](https://astro36.github.io/AstroLibrary/1.0/index.html)

### 1.1

[Documents](https://astro36.github.io/AstroLibrary/1.1/index.html)

### 1.2

[Documents](https://astro36.github.io/AstroLibrary/1.2/index.html)

### 2.0

[Documents](https://astro36.github.io/AstroLibrary/2.0/index.html)

### 2.1

[Documents](https://astro36.github.io/AstroLibrary/2.1/index.html)

## Contributors

Thanks to all contributors who helps to make AstroLibrary better.

[https://github.com/Astro36/AstroLibrary/graphs/contributors](https://github.com/Astro36/AstroLibrary/graphs/contributors)

## License
AstroLibrary is licensed under the [LGPL 3.0](./LICENSE).
