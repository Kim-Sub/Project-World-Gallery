// 3캐러셀 호버시 아이콘 컬러 변경
const svgElement = document.querySelectorAll('.bd-placeholder-img'); 
console.log(svgElement)
const spanElement = document.querySelectorAll('.csspan'); 
console.log(spanElement)

  for(let i = 0; i < svgElement.length; i++){
    svgElement[i].addEventListener('mouseover', function() {
      spanElement[i].style.color = "#285a91"
      spanElement[i].style.opacity = '1'; 
    })
  }

  for(let i = 0; i < svgElement.length; i++){
    svgElement[i].addEventListener('mouseout', function() {
      spanElement[i].style.color = ''; 
      spanElement[i].style.opacity = ''; 
    })
  }

