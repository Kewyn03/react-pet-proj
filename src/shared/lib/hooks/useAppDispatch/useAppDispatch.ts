import { useDispatch } from 'react-redux'
import { AppDispatch } from 'app/providers/StoreProvider'

// @ts-ignore
export const useAppDispatch = () => useDispatch<AppDispatch>()
