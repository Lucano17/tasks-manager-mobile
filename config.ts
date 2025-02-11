import Constants from "expo-constants"

const env = {
    DATABASE_URI: Constants.expoConfig?.extra?.DATABASE_URI || ""
}

export default env;