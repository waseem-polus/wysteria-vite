import React, { useState } from "react"
import reactLogo from "/react.svg"
import viteLogo from "/vite.svg"
import wuiLogo from "/wysteria.svg"
import { Button, Container } from "@willoui/design"
import "./App.css"

function App() {
	const [count, setCount] = useState(0)

	return (
		<Container padding ="md" direction="column" align="center">
			<Container padding="md">
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>

				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>

				<a href="https://wysteria.dev" target="_blank" rel="noreferrer">
					<img src={wuiLogo} className="logo wui" alt="WUI Logo" />
				</a>
			</Container>

			<h1>Vite + React + WUI</h1>
        
			<Container direction="column" align="center" padding="xl">
				<Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
				</Button>

				<p>
            Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</Container>

			<p className="read-the-docs">
          Click on the logos to learn more
			</p>
		</Container>
	)
}

export default App
