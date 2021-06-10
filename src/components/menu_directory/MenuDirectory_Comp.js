import { React, Component } from 'react'
import './scss/menu_directory.scss'

import MenuItem from 'components/menu_item/MenuItem_Comp'
import directory_data from 'data/directory_data'

class MenuDirectory extends Component {
    constructor() {
        super()

        this.state = {
            sections: directory_data
        }
    }

    render() {
        return (
            <div className="menu-directory">
                {this.state.sections.map(({ id, ...sectionProps }) => {
                    return (
                        <MenuItem
                            key={id}
                            {...sectionProps}
                        />)
                })}
            </div>
        )
    }

}

export default MenuDirectory
