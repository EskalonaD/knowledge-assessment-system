import React, {Component} from "react";

export default class Sort extends Component {
    render () {
        // props.sortTypes = ["время", "длина"]
        return (
            <section>
              
                <select defaultValue="default" onChange={(e) => this.props.sortTypes.find(el => el[0] === e.target.value)[1]()}>
                    <option disabled value="default">Сортировать по:</option>

                    {this.props.sortTypes.map(([name]) => <option value={name}>{name}</option>)}
                </select>
            </section>
        )
    }
}