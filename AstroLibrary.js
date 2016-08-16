/**
 * @file ModPE integrated library
 * @author Astro <astr36@naver.com>
 * @version 1.0
 */

/**
 * @namespace me
 */
let me = this.me || {};

(($, astro) => {
    /**
     * @memberOf me
     * @namespace astro
     */
    "use strict";

    const DownloadManager_ = android.app.DownloadManager,
        Context_ = android.content.Context,
        Intent_ = android.content.Intent,
        PackageManager_ = android.content.pm.PackageManager,
        Bitmap_ = android.graphics.Bitmap,
        BitmapFactory_ = android.graphics.BitmapFactory,
        BitmapDrawable_ = android.graphics.drawable.BitmapDrawable,
        ColorDrawable_ = android.graphics.drawable.ColorDrawable,
        GradientDrawable_ = android.graphics.drawable.GradientDrawable,
        LayerDrawable_ = android.graphics.drawable.LayerDrawable,
        ShapeDrawable_ = android.graphics.drawable.ShapeDrawable,
        OvalShape_ = android.graphics.drawable.shapes.OvalShape,
        Paint_ = android.graphics.Paint,
        PorterDuff_ = android.graphics.PorterDuff,
        PorterDuffColorFilter_ = android.graphics.PorterDuffColorFilter,
        ConnectivityManager_ = android.net.ConnectivityManager,
        AndroidHttpClient_ = android.net.http.AndroidHttpClient,
        Uri_ = android.net.Uri,
        Build_ = android.os.Build,
        StrictMode_ = android.os.StrictMode,
        Gravity_ = android.view.Gravity,
        MotionEvent_ = android.view.MotionEvent,
        View_ = android.view.View,
        CompoundButton_ = android.widget.CompoundButton,
        EditText_ = android.widget.EditText,
        FrameLayout_ = android.widget.FrameLayout,
        LinearLayout_ = android.widget.LinearLayout,
        PopupWindow_ = android.widget.PopupWindow,
        ScrollView_ = android.widget.ScrollView,
        TextView_ = android.widget.TextView,
        Toast_ = android.widget.Toast,
        ToggleButton_ = android.widget.ToggleButton,
        MainActivity_ = com.mojang.minecraftpe.MainActivity,
        BufferedReader_ = java.io.BufferedReader,
        ByteArrayOutputStream_ = java.io.ByteArrayOutputStream,
        DataOutputStream_ = java.io.DataOutputStream,
        File_ = java.io.File,
        FileInputStream_ = java.io.FileInputStream,
        FileOutputStream_ = java.io.FileOutputStream,
        InputStreamReader_ = java.io.InputStreamReader,
        Byte_ = java.lang.Byte,
        Class_ = java.lang.Class,
        String_ = java.lang.String,
        Thread_ = java.lang.Thread,
        Array_ = java.lang.reflect.Array,
        AccessibleObject_ = java.lang.reflect.AccessibleObject,
        URL_ = java.net.URL,
        ScriptManager_ = net.zhuoweizhang.mcpelauncher.ScriptManager,
        HttpGet_ = org.apache.http.client.methods.HttpGet,
        NativeJavaMethod_ = org.mozilla.javascript.NativeJavaMethod,
        CONTEXT = MainActivity_.currentMainActivity.get(),
        DP = CONTEXT.getResources().getDisplayMetrics().density,
        RESOURCE = CONTEXT.getResources(),
        SCREEN = CONTEXT.getWindow().getDecorView(),
        NAME = "Astro Library",
        NAME_CODE = "me_astro_library",
        VERSION = "1.0",
        DEVELOPER = "Astro",
        PATH = "/sdcard/games/me.astro/library/",
        DEVICE_WIDTH = CONTEXT.getScreenWidth(),
        DEVICE_HEIGHT = CONTEXT.getScreenHeight(),
        DEVICE_MODEL = Build_.MODEL,
        DEVICE_VERSION = Build_.VERSION.RELEASE;

    let hasLevel = false,
        verticalWindow,
        modernWrapFactory,
        notice = "Error: No Internet.",
        user;



    /**
     * Contains classes for creating drawables and colors.
     * @memberOf me.astro
     * @namespace design
     */

    /**
     * Class representing a bitmap.
     * @since 2016-05-03
     * @class
     * @memberOf me.astro.design
     */
    function Bitmap() {}

    /**
     * Creates a bitmap from a image.
     * @since 2016-05-03
     * @param {String} path Image path
     * @param {Number} [width=36] Width of bitmap
     * @param {Number} [height=36] Height of bitmap
     * @returns {android.graphics.Bitmap} Bitmap
     */
    Bitmap.createBitmap = function (path, width, height) {
        return Bitmap.resizeBitmap(BitmapFactory_.decodeFile(path), width || 36, height || 36);
    };

    /**
     * Resizes a bitmap.
     * @since 2016-05-03
     * @param {android.graphics.Bitmap} bitmap Bitmap to be resized
     * @param {Number} width Width of bitmap
     * @param {Number} height Height of bitmap
     * @returns {android.graphics.Bitmap} Bitmap
     */
    Bitmap.resizeBitmap = function (bitmap, width, height) {
        return Bitmap_.createScaledBitmap(bitmap, DP * width, DP * height, false);
    };



    /**
     * Contains color constants.
     * @since 2016-05-03
     * @memberOf me.astro.design
     * @enum {Number}
     * @readonly
     */
    const Color = {
        RED: -769226,
        RED_DARK: -2937041,
        RED_ACCENT: -44462,
        PINK: -1499549,
        PINK_DARK: -4056997,
        PINK_ACCENT: -49023,
        PURPLE: -6543440,
        PURPLE_DARK: -8708190,
        PURPLE_ACCENT: -2080517,
        DEEP_PURPLE: -10011977,
        DEEP_PURPLE_DARK: -11457112,
        DEEP_PURPLE_ACCENT: -8630785,
        INDIGO: -12627531,
        INDIGO_DARK: -13615201,
        INDIGO_ACCENT: -11309570,
        BLUE: -14575885,
        BLUE_DARK: -15108398,
        BLUE_ACCENT: -12285185,
        LIGHT_BLUE: -16537100,
        LIGHT_BLUE_DARK: -16611119,
        LIGHT_BLUE_ACCENT: -12532481,
        CYAN: -16728876,
        CYAN_DARK: -16738393,
        CYAN_ACCENT: -15138817,
        TEAL: -16738680,
        TEAL_DARK: -16746133,
        TEAL_ACCENT: -10158118,
        GREEN: -11751600,
        GREEN_DARK: -13070788,
        GREEN_ACCENT: -9834322,
        LIGHT_GREEN: -7617718,
        LIGHT_GREEN_DARK: -9920712,
        LIGHT_GREEN_ACCENT: -5046439,
        LIME: -3285959,
        LIME_DARK: -5262293,
        LIME_ACCENT: -1114303,
        YELLOW: -5317,
        YELLOW_DARK: -278483,
        YELLOW_ACCENT: -256,
        AMBER: -16121,
        AMBER_DARK: -24576,
        AMBER_ACCENT: -10432,
        ORANGE: -26624,
        ORANGE_DARK: -689152,
        ORANGE_ACCENT: -21696,
        DEEP_ORANGE: -43230,
        DEEP_ORANGE_DARK: -1684967,
        DEEP_ORANGE_ACCENT: -37312,
        BROWN: -8825528,
        BROWN_DARK: -10665929,
        BROWN_800: -11652050,
        GREY: -6381922,
        GREY_DARK: -10395295,
        BLUE_GREY: -10453621,
        BLUE_GREY_DARK: -12232092,
        BLACK: -16777216,
        WHITE: -1,
        TRANSPARENT: 0
    };
    Object.freeze(Color);



    /**
     * Class representing a drawable.
     * @since 2016-05-03
     * @class
     * @memberOf me.astro.design
     */
    function Drawable() {}

    /**
     * Tints color on the drawable.
     * @since 2016-05-03
     * @param {android.graphics.drawable.Drawable} drawable Drawable
     * @param {Number} color Color
     */
    Drawable.setTint = function (drawable, color) {
        drawable.getPaint().setColorFilter(new PorterDuffColorFilter_(color, PorterDuff_.Mode.SRC_ATOP));
        return drawable;
    };



    /**
     * Class representing a drawable which has a shadow.
     * @since 2016-05-03
     * @class
     * @extends me.astro.design.Drawable
     * @memberOf me.astro.design
     */
    function ShadowDrawable() {}

    /**
     * A drawable which has a shadow (for copying).
     * @type {android.graphics.drawable.Drawable}
     */
    ShadowDrawable.RESOURCE = RESOURCE.getDrawable(17301521);

    /**
     * Creates a drawable which has a shadow. 
     * @since 2016-05-03
     * @returns {android.graphics.drawable.LayerDrawable} A drawable which has a shadow.
     */
    ShadowDrawable.create = function () {
        let shadowDrawable = new LayerDrawable_([ShadowDrawable.RESOURCE, new ColorDrawable_(-1)]);
        shadowDrawable.setLayerInset(0, DP * 3, DP * 6, DP * 3, DP * 2);
        return shadowDrawable;
    };



    /**
     * Contains color constants.
     * @since 2016-07-04
     * @memberOf me.astro.design
     * @enum {Number}
     * @readonly
     */
    const Shape = {
        RECT: 0,
        CIRCLE: 1
    };
    Object.freeze(Shape);



    /**
     * Class representing a theme.
     * @since 2016-05-03
     * @class
     * @memberOf me.astro.design
     * @param {Object} theme Library theme
     */
    function Theme({
        primary,
        primaryDark,
        accent,
        textBlack,
        textWhite,
        textGrey,
    }) {
        this._colorPrimary = primary || Color.INDIGO;
        this._colorPrimaryDark = primaryDark || Color.INDIGO_DARK;
        this._colorAccent = accent || Color.PINK_ACCENT;
        this._colorTextBlack = textBlack || Color.BLACK;
        this._colorTextWhite = textWhite || Color.WHITE;
        this._colorTextGrey = textGrey || Color.GREY;
    }

    /**
     * Default theme
     * @type {me.astro.design.Theme}
     */
    Theme.DEFAULT = new Theme({});

    /**
     * Background color
     * @type {Number}
     */
    Theme.BACKGROUND_COLOR = 0;

    /**
     * Effect color
     * @type {Number}
     */
    Theme.EFFECT_COLOR = 1;

    /**
     * Text color
     * @type {Number}
     */
    Theme.TEXT_COLOR = 2;

    /**
     * Hint text color at EditText
     * @type {Number}
     */
    Theme.HINT_TEXT_COLOR = 3;

    /**
     * Returns a color of TextView theme.
     * @since 2016-05-28
     * @param {Number} type Type of color
     * @returns {Number} Color
     */
    Theme.prototype.getTextView = function (type) {
        if (type === Theme.TEXT_COLOR) {
            return this._colorTextBlack;
        }
    };

    /**
     * Returns a color of Button theme.
     * @since 2016-05-28
     * @param {Number} type Type of color
     * @returns {Number} Color
     */
    Theme.prototype.getButton = function (type) {
        switch (type) {
        case Theme.BACKGROUND_COLOR:
            return this._colorPrimary;
        case Theme.EFFECT_COLOR:
            return this._colorPrimaryDark;
        case Theme.TEXT_COLOR:
            return this._colorTextWhite;
        }
    };

    /**
     * Returns a color of EditText theme.
     * @since 2016-05-28
     * @param {Number} type Type of color
     * @returns {Number} Color
     */
    Theme.prototype.getEditText = function (type) {
        switch (type) {
        case Theme.BACKGROUND_COLOR:
            return this._colorAccent;
        case Theme.TEXT_COLOR:
            return this._colorTextBlack;
        case Theme.HINT_TEXT_COLOR:
            return this._colorTextGrey;
        }
    };

    /**
     * Returns a color of ProgressWindow theme.
     * @since 2016-05-28
     * @param {Number} type Type of color
     * @returns {Number} Color
     */
    Theme.prototype.getProgressWindow = function (type) {
        switch (type) {
        case Theme.BACKGROUND_COLOR:
            return this._colorPrimary;
        case Theme.EFFECT_COLOR:
            return this._colorAccent;
        case Theme.TEXT_COLOR:
            return this._colorTextWhite;
        }
    };

    /**
     * Returns a color of Toast theme.
     * @since 2016-05-28
     * @param {Number} type Type of color
     * @returns {Number} Color
     */
    Theme.prototype.getToast = function (type) {
        switch (type) {
        case Theme.BACKGROUND_COLOR:
            return this._colorPrimary;
        case Theme.TEXT_COLOR:
            return this._colorTextWhite;
        }
    };

    /**
     * Returns a color of Window theme.
     * @since 2016-05-28
     * @param {Number} type Type of color
     * @returns {Number} Color
     */
    Theme.prototype.getWindow = function (type) {
        switch (type) {
        case Theme.BACKGROUND_COLOR:
            return this._colorPrimary;
        case Theme.EFFECT_COLOR:
            return this._colorPrimaryDark;
        case Theme.TEXT_COLOR:
            return this._colorTextWhite;
        }
    };



    /**
     * Contains classes for using internet.
     * @memberOf me.astro
     * @namespace internet
     */

    /**
     * Returns HTML of a site.
     * @since 2016-05-03
     * @memberOf me.astro.internet
     * @param {String} url URL
     * @returns {String} HTML
     */
    const readHtml = url => {
        try {
            StrictMode_.setThreadPolicy(new StrictMode_.ThreadPolicy.Builder().permitAll().build());
            let byteArrayOutputStream = new ByteArrayOutputStream_();
            AndroidHttpClient_.newInstance("userAgent").execute(new HttpGet_(url)).getEntity().writeTo(byteArrayOutputStream);
            byteArrayOutputStream.close();
            return String(byteArrayOutputStream.toString());
        } catch (e) {
            Toast.show(e);
        }
        return "";
    };



    /**
     * Returns IP of user.
     * @since 2016-05-03
     * @memberOf me.astro.internet
     * @returns {String} IP
     */
    const getIp = () => readHtml("http://minedev.dothome.co.kr/library/get_ip.php");



    /**
     * Class representing a network checker.
     * @since 2016-05-03
     * @class
     * @memberOf me.astro.internet
     */
    function NetworkChecker() {
        this._connectivityManager = CONTEXT.getSystemService(Context_.CONNECTIVITY_SERVICE);
    }

    /**
     * Wi-fi
     * @type {Number}
     */
    NetworkChecker.WIFI = 0;

    /**
     * 4G, 3G, etc
     * @type {Number}
     */
    NetworkChecker.MOBILE = 1;

    /**
     * Not connected
     * @type {Number}
     */
    NetworkChecker.NOT_CONNECTED = 2;

    /**
     * Returns a status of internet connection.
     * @since 2016-05-03
     * @returns {Number} Status of internet connection.
     */
    NetworkChecker.prototype.getConnectedType = function () {
        let connectivityManager = this._connectivityManager,
            wifi = connectivityManager.getNetworkInfo(ConnectivityManager_.TYPE_WIFI).isConnected(),
            mobile = connectivityManager.getNetworkInfo(ConnectivityManager_.TYPE_MOBILE).isConnected();
        if (wifi) {
            return NetworkChecker.WIFI;
        } else if (mobile) {
            return NetworkChecker.MOBILE;
        } else {
            return NetworkChecker.NOT_CONNECTED;
        }
    };

    /**
     * Checks if a device is connected internet.
     * @since 2016-05-03
     * @returns {Boolean} Status of internet connection.
     */
    NetworkChecker.prototype.isConnected = function () {
        let type = this.getConnectedType();
        return type <= 1;
    };



    /**
     * Class representing a web server.
     * @since 2016-05-03
     * @class
     * @memberOf me.astro.internet
     * @param {String} url URL
     */
    function Server(url) {
        this._url = url;
    }

    /**
     * Sends a data to server by POST.
     * @since 2016-05-28
     * @param {String} value key1=value&key2=value2...
     * @param {Function} [response=function(inputStream){}] Callback to be invoked after the data was sent.
     */
    Server.prototype.post = function (value, response) {
        if (new NetworkChecker().isConnected()) {
            let thiz = this;
            response = response || (() => {});
            new Thread_({
                run() {
                    try {
                        StrictMode_.setThreadPolicy(new StrictMode_.ThreadPolicy.Builder().permitAll().build());
                        let httpUrlConnection = new URL_(thiz._url).openConnection(),
                            outputStream;
                        httpUrlConnection.setDoInput(true);
                        httpUrlConnection.setDoOutput(true);
                        httpUrlConnection.setUseCaches(false);
                        httpUrlConnection.setRequestMethod("POST");
                        httpUrlConnection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
                        outputStream = httpUrlConnection.getOutputStream();
                        outputStream.write(new String_(value).getBytes());
                        outputStream.flush();
                        outputStream.close();
                        response(httpUrlConnection.getInputStream());
                    } catch (e) {
                        Toast.show(e);
                    }
                }
            }).start();
        } else {
            Toast.show("Error: No Internet.");
        }
        return this;
    };

    /**
     * Uploads a file to server.
     * @since 2016-05-03
     * @param {String} path File path
     * @param {Function} [response=function(code){}] Callback to be invoked after the file was uploaded.
     */
    Server.prototype.upload = function (path, response) {
        if (new NetworkChecker().isConnected()) {
            let thiz = this;
            response = response || (() => {});
            new Thread_({
                run() {
                    try {
                        StrictMode_.setThreadPolicy(new StrictMode_.ThreadPolicy.Builder().permitAll().build());
                        let urlConnection = new URL_(thiz._url).openConnection(),
                            fileInputStream = new FileInputStream_(path),
                            dataOutputStream,
                            buffer,
                            bufferSize;
                        urlConnection.setDoInput(true);
                        urlConnection.setDoOutput(true);
                        urlConnection.setUseCaches(false);
                        urlConnection.setRequestMethod("POST");
                        urlConnection.setRequestProperty("Connection", "Keep-Alive");
                        urlConnection.setRequestProperty("ENCTYPE", "multipart/form-data");
                        urlConnection.setRequestProperty("Content-Type", "multipart/form-data;boundary=*****");
                        urlConnection.setRequestProperty("uploaded_file", path);
                        dataOutputStream = new DataOutputStream_(urlConnection.getOutputStream());
                        dataOutputStream.writeBytes("--*****\r\n");
                        dataOutputStream.writeBytes("Content-Disposition: form-data;name=\"uploaded_file\";filename=\"" + path + "\"\r\n");
                        dataOutputStream.writeBytes("\r\n");
                        buffer = new Array_.newInstance(Byte_.TYPE, bufferSize = Math.min(fileInputStream.available(), 1048576));
                        fileInputStream.read(buffer, 0, bufferSize);
                        dataOutputStream.write(buffer, 0, bufferSize);
                        dataOutputStream.writeBytes("\r\n");
                        dataOutputStream.writeBytes("--*****--\r\n");
                        if (urlConnection.getResponseCode() === 200) {
                            response("success");
                        } else {
                            response("fail");
                        }
                        fileInputStream.close();
                        dataOutputStream.flush();
                        dataOutputStream.close();
                    } catch (e) {
                        Toast.show(e);
                        response("fail");
                    }
                }
            }).start();
        } else {
            Toast.show("Error: No Internet.");
        }
        return this;
    };



    /**
     * Contains classes about security.
     * @memberOf me.astro
     * @namespace security
     */

    /**
     * Class representing a account.
     * @since 2016-05-29
     * @class
     * @memberOf me.astro.security
     * @param {String} id ID
     * @param {String} password Password
     */
    function Account(id, password) {
        this._email = "";
        this._id = id;
        this._name = "";
        this._password = password;
        this._userId = null;
        this._isAvailable = false;
    }

    /**
     * Sign up fail
     * @type {Number}
     */
    Account.REGISTER_FAIL = 0;

    /**
     * Sign up success
     * @type {Number}
     */
    Account.REGISTER_SUCCESS = 1;

    /**
     * Sign in fail
     * @type {Number}
     */
    Account.LOGIN_FAIL = 2;

    /**
     * Sign in success
     * @type {Number}
     */
    Account.LOGIN_SUCCESS = 3;

    /**
     * Edit fail
     * @type {Number}
     */
    Account.EDIT_FAIL = 4;

    /**
     * Edit success
     * @type {Number}
     */
    Account.EDIT_SUCCESS = 5;

    /**
     * Get a data from the server fail
     * @type {Number}
     */
    Account.GET_FAIL = 6;

    /**
     * Get a data from the server success
     * @type {Number}
     */
    Account.GET_SUCCESS = 7;

    /**
     * Logout
     * @type {Number}
     */
    Account.LOGOUT = 8;

    /**
     * Sign up the server.
     * @since 2016-05-29
     * @param {String} id ID
     * @param {String} password Password
     * @param {String} name User's nickname
     * @param {String} email E-mail
     * @param {Function} [response=function(code){}] Callback to be invoked when you connected the server.
     */
    Account.signUp = function (id, password, name, email, response) {
        response = response || (() => {});
        if (Text.verifyId(id) && Text.verifyPassword(password) && Text.verifyName(name) && Text.verifyEmail(email)) {
            let server = new Server("http://minedev.dothome.co.kr/deneb/admin.php");
            server.post("type=sign_up&id=" + id + "&pw=" + password + "&email=" + email + "&name=" + name, inputStream => {
                if (inputStream !== null) {
                    let byteArrayOutputStream = new ByteArrayOutputStream_(1024),
                        buffer,
                        str;
                    while ((buffer = inputStream.read()) !== -1) {
                        byteArrayOutputStream.write(buffer);
                    }
                    inputStream.close();
                    byteArrayOutputStream.close();
                    str = new String_(byteArrayOutputStream.toByteArray());
                    if (str.contains("Error")) {
                        Toast.show(str);
                        response(Account.REGISTER_FAIL);
                    } else {
                        Toast.show(str);
                        response(Account.REGISTER_SUCCESS);
                    }
                } else {
                    Toast.show("Error: Cannot connect to the server.");
                    response(Account.REGISTER_FAIL);
                }
            });
        } else {
            Toast.show("Error: Invalid format.");
            response(Account.REGISTER_FAIL);
        }
    };

    /**
     * Get a data from the server.
     * @since 2016-07-04
     * @param {String} key Key of data
     * @param {Function} [response=function(code,str){}] Callback to be invoked when you connected the server.
     */
    Account.prototype.getDataFromServer = function (key, response) {
        response = response || (() => {});
        let server = new Server("http://minedev.dothome.co.kr/deneb/admin.php");
        server.post("type=get&userid=" + this._userId + "&key=" + key, inputStream => {
            if (inputStream !== null) {
                let byteArrayOutputStream = new ByteArrayOutputStream_(1024),
                    buffer,
                    str;
                while ((buffer = inputStream.read()) !== -1) {
                    byteArrayOutputStream.write(buffer);
                }
                inputStream.close();
                byteArrayOutputStream.close();
                str = new String_(byteArrayOutputStream.toByteArray());
                if (str.contains("Error")) {
                    Toast.show(str);
                    response(Account.GET_FAIL);
                } else {
                    response(Account.GET_SUCCESS, str);
                }
            } else {
                Toast.show("Error: Cannot connect to the server.");
                response(Account.GET_FAIL);
            }
        });
        return this;
    };

    /**
     * Returns user's E-mail.
     * @since 2016-07-04
     * @returns {String} User's E-mail
     */
    Account.prototype.getEmail = function () {
        return this._email;
    };

    /**
     * Returns user's ID.
     * @since 2016-07-04
     * @returns {String} User's ID
     */
    Account.prototype.getId = function () {
        return this._id;
    };

    /**
     * Returns user's nickname.
     * @since 2016-07-04
     * @returns {String} User's nickname.
     */
    Account.prototype.getName = function () {
        return this._name;
    };

    /**
     * Returns user's password.
     * @since 2016-07-04
     * @returns {String} User's password
     */
    Account.prototype.getPassword = function () {
        return this._password;
    };

    /**
     * Returns a rank of users' data which are from the server.
     * @since 2016-08-05
     * @param {String} key Key of data
     * @param {Function} [response=function(code,rank){}] Callback to be invoked when you connected the server.
     * @returns {Array.<String>} Rank of users' data which are from the server.
     */
    Account.prototype.getRank = function (key, response) {
        response = response || (() => {});
        let server = new Server("http://minedev.dothome.co.kr/deneb/admin.php");
        server.post("type=rank&key=" + key, inputStream => {
            if (inputStream !== null) {
                let byteArrayOutputStream = new ByteArrayOutputStream_(1024),
                    buffer,
                    str;
                while ((buffer = inputStream.read()) !== -1) {
                    byteArrayOutputStream.write(buffer);
                }
                inputStream.close();
                byteArrayOutputStream.close();
                str = new String_(byteArrayOutputStream.toByteArray());
                if (str.contains("Error")) {
                    Toast.show(str);
                    response(Account.GET_FAIL);
                } else {
                    let arr = String(str).split("###");
                    for (let i = arr.length; i--;) {
                        arr[i] = arr[i].split(":");
                    }
                    response(Account.GET_SUCCESS, arr);
                }
            } else {
                Toast.show("Error: Cannot connect to the server.");
                response(Account.GET_FAIL);
            }
        });
        return this;
    };

    /**
     * Returns user's ID which is used to distinguish users at the server.
     * @since 2016-05-29
     * @returns {String} Returns User's ID.
     */
    Account.prototype.getUserId = function () {
        return this._userId;
    };

    /**
     * Checks if user is signed in.
     * @since 2016-05-29
     * @returns {Boolean} If user is signed in, returns true, or not returns false.
     */
    Account.prototype.isAvailable = function () {
        return this._isAvailable;
    };

    /**
     * Sign in the server.
     * @since 2016-05-29
     * @param {Function} [response=function(code){}] Callback to be invoked when you connected the server.
     */
    Account.prototype.login = function (response) {
        response = response || (() => {});
        if (Text.verifyId(this._id) && Text.verifyPassword(this._password)) {
            let thiz = this,
                server = new Server("http://minedev.dothome.co.kr/deneb/admin.php");
            server.post("type=sign_in&id=" + thiz._id + "&pw=" + thiz._password, inputStream => {
                if (inputStream !== null) {
                    let byteArrayOutputStream = new ByteArrayOutputStream_(1024),
                        buffer,
                        str;
                    while ((buffer = inputStream.read()) !== -1) {
                        byteArrayOutputStream.write(buffer);
                    }
                    inputStream.close();
                    byteArrayOutputStream.close();
                    str = new String_(byteArrayOutputStream.toByteArray());
                    if (str.contains("Error")) {
                        Toast.show(str);
                        response(Account.LOGIN_FAIL);
                    } else {
                        let arr = str.split("#");
                        thiz._userId = arr[1];
                        thiz._isAvailable = true;
                        thiz.getDataFromServer("name", (code, str) => code === Account.GET_SUCCESS && (thiz._name = str));
                        thiz.getDataFromServer("email", (code, str) => code === Account.GET_SUCCESS && (thiz._email = str));
                        Toast.show(arr[0]);
                        response(Account.LOGIN_SUCCESS);
                    }
                } else {
                    Toast.show("Error: Cannot connect to the server.");
                    response(Account.LOGIN_FAIL);
                }
            });
        } else {
            Toast.show("Error: Invalid format.");
            response(Account.LOGIN_FAIL);
        }
        return this;
    };

    /**
     * Logout the server.
     * @since 2016-05-29
     */
    Account.prototype.logout = function () {
        this._userId = null;
        this._isAvailable = false;
        return this;
    };

    /**
     * Modifies the user's information.
     * @since 2016-07-27
     * @param {String} key Key of data.
     * @param {String} value Value of data.
     * @param {Function} [response=function(code){}] Callback to be invoked when you connected the server.
     */
    Account.prototype.modifyData = function (key, value, response) {
        response = response || (() => {});
        let server = new Server("http://minedev.dothome.co.kr/deneb/admin.php");
        server.post("type=modify&userid=" + this._userId + "&key=" + key + "&value=" + value, inputStream => {
            if (inputStream !== null) {
                let byteArrayOutputStream = new ByteArrayOutputStream_(1024),
                    buffer,
                    str;
                while ((buffer = inputStream.read()) !== -1) {
                    byteArrayOutputStream.write(buffer);
                }
                inputStream.close();
                byteArrayOutputStream.close();
                str = new String_(byteArrayOutputStream.toByteArray());
                if (str.contains("Error")) {
                    Toast.show(str);
                    response(Account.EDIT_FAIL);
                } else {
                    Toast.show(str);
                    response(Account.EDIT_SUCCESS);
                }
            } else {
                Toast.show("Error: Cannot connect to the server.");
                response(Account.EDIT_FAIL);
            }
        });
        return this;
    };

    /**
     * Modifies the user's information.
     * @since 2016-07-05
     * @param {String} [password] User's password
     * @param {String} [name] User's nickname
     * @param {String} [email] User's E-mail
     * @param {Function} [response=function(code){}] Callback to be invoked when you connected the server.
     */
    Account.prototype.modifyUserData = function (password, name, email, response) {
        password = password || this._password;
        name = name || this._name;
        email = email || this._email;
        response = response || (() => {});
        if (Text.verifyPassword(password) && Text.verifyName(name) && Text.verifyEmail(email)) {
            let thiz = this,
                server = new Server("http://minedev.dothome.co.kr/deneb/admin.php");
            server.post("type=modify_user&userid=" + this._userId + "&key=pw|name|email&value=" + [password, name, email].join("|"), inputStream => {
                if (inputStream !== null) {
                    let byteArrayOutputStream = new ByteArrayOutputStream_(1024),
                        buffer,
                        str;
                    while ((buffer = inputStream.read()) !== -1) {
                        byteArrayOutputStream.write(buffer);
                    }
                    inputStream.close();
                    byteArrayOutputStream.close();
                    str = new String_(byteArrayOutputStream.toByteArray());
                    if (str.contains("Error")) {
                        Toast.show(str);
                        response(Account.EDIT_FAIL);
                    } else {
                        thiz._password = password;
                        thiz._name = name;
                        thiz._email = email;
                        Toast.show(str);
                        response(Account.EDIT_SUCCESS);
                    }
                } else {
                    Toast.show("Error: Cannot connect to the server.");
                    response(Account.EDIT_FAIL);
                }
            });
        } else {
            Toast.show("Error: Invalid format.");
            response(Account.EDIT_FAIL);
        }
        return this;
    };

    astro.design = {
        Bitmap: Bitmap,
        Color: Color,
        Drawable: Drawable,
        ShadowDrawable: ShadowDrawable,
        Shape: Shape,
        Theme: Theme
    };
    astro.internet = {
        NetworkChecker: NetworkChecker,
        Server: Server,
        getIp: getIp,
        readHtml: readHtml,
    };
    astro.security = {
        Account: Account
    };

    $.selectLevelHook = () => {
        hasLevel = true;
    };

    $.leaveGame = () => {
        hasLevel = false;
    };

})(this, (typeof me.astro === "object" ? me.astro : (me.astro = {})));