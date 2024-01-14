import React from 'react'
import style from '../../styles/section/loading.module.css'
const Loading = () => {
  return (
<div className={style.load_wrapper}>
<div className={style.spinner}></div>
</div>
  )
}

export default Loading