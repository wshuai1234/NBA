import React from 'react';
import nba from 'nba';
import { AutoComplete, Icon, Input } from 'antd';
import { PROFILE_PIC_URL_PREFIX } from '../constants';
const Option = AutoComplete.Option;


export class SearchBar extends React.Component{
    state = {
        dataSource: [],
    }
    onSelect = (playerName) => {
        console.log('onSelect', playerName);
        this.props.loadPlayerInfo(playerName);
    }


    handleSearch = (value) => {
        const players = nba.searchPlayers(value);
        console.log(players);
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(({fullName, playerId}) =>
                <Option key={playerId} value={fullName}>
                    <img
                        className="player-option-pic"
                        src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
                        alt="Profile"
                    />
                    <span className="player-option-label">{fullName}</span>
                </Option>
            )

        });
    }

    render() {
        const { dataSource } = this.state;
        return (
            <AutoComplete
                className="search-bar"
                size="large"
                dataSource={dataSource}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search NBA Player"
                optionLabelProp="value"
            >
                <Input suffix={<Icon type="search" />} />
            </AutoComplete>

        );
    }
}