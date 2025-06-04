import React, { useContext } from "react";

import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { Tooltip, Grow } from "@mui/material";

import GeneralContext from "./GeneralContext";

function WatchListActions({ uid }) {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlinedIcon className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHorizIcon className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
}

export default WatchListActions;
