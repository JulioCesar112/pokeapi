import {configureStore} from "@reduxjs/toolkit"
import { trainerSlice } from "./slices/trainer"

export default configureStore ({
  reducer:(
    trainerSlice
  )
})