import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

import './header.css';
import { Link } from 'react-router-dom';

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    vuxna: 1,
    barn: 0,
    rum: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div
        className={
          type === 'list'
            ? 'headerContainer listMode'
            : 'headerContainer'
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Boende</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flyg</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Hyrbilar</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Sevärdheter</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Flygtaxi</span>
          </div>
        </div>
        {type !== 'list' && (
          <>
            <h1 className="headerTitle">
              Vill du ha rabatter livet ut? Det får du med Genius.
            </h1>
            <p className="headerDesc">
              Res och få förmåner – med ett gratis Booking.com-konto
              får du tillgång till rabatter på minst 10 % direkt.
            </p>
            <button className="headerBtn">
              <Link to="login" className="headerBtnLink">
                Logga in/skapa ett konto
              </Link>
            </button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon
                  icon={faBed}
                  className="headerIcon"
                />
                <input
                  type="text"
                  placeholder="Vart vill du åka?"
                  className="headerSearchInput"
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="headerIcon"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(
                  date[0].startDate,
                  'dd/MM/yyyy'
                )} - ${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="headerIcon"
                />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.vuxna} vuxna . ${options.barn} barn . ${options.rum} ´rum `}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Vuxna</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.vuxna <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption('vuxna', 'd')}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.vuxna}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption('vuxna', 'i')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Barn</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.barn <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption('barn', 'd')}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.barn}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption('barn', 'i')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Rum</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.rum <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption('rum', 'd')}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.rum}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption('rum', 'i')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtnSearch">Sök</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
