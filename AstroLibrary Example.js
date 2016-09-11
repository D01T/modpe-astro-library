function onLibraryLoaded(name, nameCode, version) {
    if (nameCode === "me_astro_library") {
        print("Load");
    }
}

function onLoginListener(code) {
    print(code);
}