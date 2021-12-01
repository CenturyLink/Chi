{
    if ($1=="VUE_APP_CHI_VERSION") {
        print("VUE_APP_CHI_VERSION=" version)
    } else if ($1=="VUE_APP_CHI_CSS_VERSIONS_ALLOWED"){
        current=$2;
        print("VUE_APP_CHI_CSS_VERSIONS_ALLOWED=" current "," version)
    } else {
        print
    }
}
