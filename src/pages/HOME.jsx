import React, { useContext } from 'react'
import { Mycontext } from './ContextApi'

function HOME() {
    const {data, setData} = useContext(Mycontext);
    console.log(data);
    
  return (
    <div>
        App.js <br />
        ㄴ 링크 연결. HOME, Swiper 텍스트 클릭 시 각 페이지로 이동. 부모(ContextApi)-자식(HOME, Swiper) 관계 생성. <br /><br />

        ContextApi <br />
        ㄴ Context 생성한 컴포넌트. value 값 지정 후 obj 형식의 'children' 데이터를 값만 꺼내 자식에게 전달. <br /><br />

        Mycontext <br />
        ㄴ 생성한 Context를 'Mycontext'라는 변수에 저장. <br /><br />

        HOME <br />
        ㄴ 부모로부터 생성한 Context를 받아 사용.
    </div>
  )
}

export default HOME