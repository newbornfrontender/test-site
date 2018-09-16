import{LitElement,html,plusIcon,minusIcon,ButtonSharedStyles,PageViewElement,connect,store,SharedStyles}from"./my-app.js";const INCREMENT="INCREMENT",DECREMENT="DECREMENT",increment=()=>{return{type:INCREMENT}},decrement=()=>{return{type:DECREMENT}};var counter={INCREMENT:INCREMENT,DECREMENT:DECREMENT,increment:increment,decrement:decrement};class CounterElement extends LitElement{_render(props){return html`
      ${ButtonSharedStyles}
      <style>
        span { width: 20px; display: inline-block; text-align: center; font-weight: bold;}
      </style>
      <div>
        <p>
          Clicked: <span>${props.clicks}</span> times.
          Value is <span>${props.value}</span>.
          <button on-click="${()=>this._onIncrement()}" title="Add 1">${plusIcon}</button>
          <button on-click="${()=>this._onDecrement()}" title="Minus 1">${minusIcon}</button>
        </p>
      </div>
    `}static get properties(){return{clicks:Number,value:Number}}constructor(){super();this.clicks=0;this.value=0}_onIncrement(){this.value++;this.clicks++;this.dispatchEvent(new CustomEvent("counter-incremented"))}_onDecrement(){this.value--;this.clicks++;this.dispatchEvent(new CustomEvent("counter-decremented"))}}window.customElements.define("counter-element",CounterElement);const counter$1=(state={clicks:0,value:0},action)=>{switch(action.type){case INCREMENT:return{clicks:state.clicks+1,value:state.value+1};case DECREMENT:return{clicks:state.clicks+1,value:state.value-1};default:return state;}};var counter$2={default:counter$1};store.addReducers({counter:counter$1});class MyView2 extends connect(store)(PageViewElement){_render(props){return html`
      ${SharedStyles}
      <section>
        <h2>Redux example: simple counter</h2>
        <div class="circle">${props._value}</div>
        <p>This page contains a reusable <code>&lt;counter-element&gt;</code>. The
        element is not built in a Redux-y way (you can think of it as being a
        third-party element you got from someone else), but this page is connected to the
        Redux store. When the element updates its counter, this page updates the values
        in the Redux store, and you can see the current value of the counter reflected in
        the bubble above.</p>
        <br><br>
      </section>
      <section>
        <p>
          <counter-element value="${props._value}" clicks="${props._clicks}"
              on-counter-incremented="${()=>store.dispatch(increment())}"
              on-counter-decremented="${()=>store.dispatch(decrement())}">
          </counter-element>
        </p>
      </section>
    `}static get properties(){return{_clicks:Number,_value:Number}}_stateChanged(state){this._clicks=state.counter.clicks;this._value=state.counter.value}}window.customElements.define("my-view2",MyView2);export{counter as $counter,counter$2 as $counter$1,INCREMENT,DECREMENT,increment,decrement,counter$1 as $counterDefault};