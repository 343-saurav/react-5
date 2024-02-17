import React from 'react'

export default function Manager() {
    const role2 =localStorage.getItem('role');
  return (
    role2==='Manager'?

    <div>
     Mannafyuewi
    </div>:
    <div>You are Not Authorized</div>
  )
}
