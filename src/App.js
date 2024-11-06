import "./App";
import "bulma/css/bulma.css";
import Navbar from "./components/Navbar";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton";
import Message from "./components/Message";
function App(){
  return <div className="App">
    <Navbar/>
    <FormField label="Name" type="text" placeholder="sree" />
    {/* <CoolButton isSuccess >Button 1</CoolButton>
<CoolButton> Button 2 </CoolButton>
 */}
 <CoolButton/>
{/*  
<CoolButton  isSmall  isDanger  isRounded>Button 1</CoolButton>

<CoolButton  isSmall  isSuccess>Button 2</CoolButton>
 */}
 <Message  isInfo  title="Hello World">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
	<strong>Pellentesque risus mi</strong>.
</Message>


  </div>;
}

export default App;