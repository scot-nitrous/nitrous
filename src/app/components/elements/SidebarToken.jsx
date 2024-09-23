import React, { Component } from 'react';
import tt from 'counterpart';
import { Link } from 'react-router';
import axios from 'axios';
import {
    formatDecimal,
    parsePayoutAmount,
} from 'app/utils/ParsersAndFormatters';

class Livefeed extends Component {
    state = {
     buidlprice: 'buidl',
     hive: 'hive',
     bitcoin: 'bitcoin',
    };

    componentDidMount() {
        fetch(
            'https://api.coingecko.com/api/v3/simple/price?ids=hive&vs_currencies=usd'
        )
            .then(response => response.json())
            .then(data => {
                this.setState({
                    hive: data.hive.usd.toLocaleString(
                        'en-US'
                    )
                });
            });
            fetch(
                'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
            )
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        bitcoin: data.bitcoin.usd.toLocaleString(
                            'en-US'
                        )
                    });
                });
    }

    render() {
        axios
        .request({
            method: 'POST',
            url: 'https://ha.herpc.dtools.dev/contracts',
            headers: { 'Content-Type': 'application/json' },
            data: {
                jsonrpc: '2.0',
                id: 1,
                method: 'findOne',
                params: {
                    contract: 'market',
                    table: 'metrics',
                    query: { symbol: 'BUIDL' },
                    offset: 0,
                    limit: 1000,
                },
            },
        })
        .then(response => {
            let buidlToken = response.data.result.lastPrice.toLocaleString(
                'en-US'
            );
            this.setState({
                buidlprice: buidlToken,
            });
        })
        .catch(function(error) {
            console.error(error);
        });
        const buidl = this.state.buidlprice;
        const btc = this.state.bitcoin;
        const hive =this.state.hive;
        return (
            <div>
            <div className="c-sidebar__module">
                <h5>
                    <b>Live Price Feed</b>
                </h5>
                <br />
                <h5>
                    {' '}
                    <b>{btc} USD</b>
                </h5>
                <p>
                    Bitcoin Market Value by{' '}
                    <a href="https://www.coingecko.com/en/coins/bitcoin">
                        @Coingecko
                    </a>
                </p>
                <hr />
                <h5>
                    <b>{hive} USD</b>
                </h5>
                <p>
                    Hive Market Value by{' '}
                    <a href="https://www.coingecko.com/en/coins/hive">
                        @Coingecko
                    </a>
                </p>
                <hr />
                <h5>
                    {' '}
                    <b>{buidl} USD</b>
                </h5>
                <p>
                    Buidl Market Value by{' '}
                    <a href="https://hive-engine.com/trade/BUIDL">
                        @Hive-Engine
                    </a>
                </p>
            </div>
        </div>
        );
    }
}

const SidebarToken = ({
    scotToken,
    scotTokenCirculating,
    scotTokenBurn,
    scotTokenStaking,
    useHive,
}) => {
    if (scotTokenCirculating && typeof scotTokenCirculating === 'string') {
        scotTokenCirculating = parsePayoutAmount(scotTokenCirculating);
    }

    if (scotTokenBurn && typeof scotTokenBurn === 'string') {
        scotTokenBurn = parsePayoutAmount(scotTokenBurn);
    }

    if (scotTokenStaking && typeof scotTokenStaking === 'string') {
        scotTokenStaking = parsePayoutAmount(scotTokenStaking);
    }

    const total = formatDecimal(scotTokenCirculating + scotTokenBurn);
    const circulating = formatDecimal(scotTokenCirculating);
    const circulatingRate = formatDecimal(
        scotTokenCirculating / (scotTokenCirculating + scotTokenBurn) * 100
    );
    const burn = formatDecimal(scotTokenBurn);
    const burnRate = formatDecimal(
        scotTokenBurn / (scotTokenCirculating + scotTokenBurn) * 100
    );
    const staking = formatDecimal(scotTokenStaking);
    const stakingRate = formatDecimal(
        scotTokenStaking / scotTokenCirculating * 100
    );

    return (
        <div>
        <div className="c-sidebar__module">
        <h5>
         <b>Explore Build-it ?</b>
       </h5>
        <br />
        <p className='articles__h2 entry-title announce'>
           <Link to="/faq.html">
            Frequently Asked Questions.
           </Link></p>
     </div>
     <Livefeed />
        </div>
    );
};

export default SidebarToken;
