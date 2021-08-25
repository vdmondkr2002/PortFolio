import React from 'react'
import {Row} from 'react-bootstrap'
import GithubCalender from 'react-github-calender'


const Github = () => {
    const colorTheme = {
        background: "transparent",
        text: "#ffffff",
        grade4: "#e01917",
        grade3: "#e03417",
        grade2: "#e15017",
        grade1: "#e06917",
        grade0: "#DDFFFC",
    }

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Days I <strong className="purple">Code</strong>
            </h1>

            <GithubCalender
            username="vdmondkr2002"
            blockSize={15}
            blockMargin={5}
            theme={colorTheme}
            fontSize={16}
            />
        </Row>
    )
}

export default Github
