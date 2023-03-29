import React from "react"
import ContentLoader from "react-content-loader"

const TabelLoaders = (props) => (
  <ContentLoader 
    speed={2}
    width={1500}
    height={500}
    viewBox="0 0 900 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="7" y="16" rx="0" ry="0" width="177" height="120" /> 
    <rect x="535" y="160" rx="3" ry="3" width="48" height="3" /> 
    <rect x="205" y="15" rx="0" ry="0" width="177" height="120" /> 
    <rect x="401" y="16" rx="0" ry="0" width="177" height="120" />
  </ContentLoader>
)

export default TabelLoaders

