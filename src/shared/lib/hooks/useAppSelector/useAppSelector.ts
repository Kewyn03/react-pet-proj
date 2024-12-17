import { useSelector } from 'react-redux'
import { RootState } from 'app/providers/StoreProvider/config/store'

// @ts-ignore
export const useAppSelector = useSelector.withTypes<RootState>()
