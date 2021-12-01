{
    if ($1 == "\"@centurylink/chi-vue\":") {
        print("    " $1 " \"" version "\",")
    } else {
        print $0
    }
}
