import { memo } from 'react'
import { type DishesTitles as DishesTitlesType } from '../../../types'
import { getIcon } from '../../../utils/getDishIcon'

function Plate({ title }: { title: DishesTitlesType }) {
  return (
    <div className="table__plate">
      {getIcon(title)}
    </div>
  )
}

export default memo(Plate)
