import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Searchinformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      name: '',
      country: '',
      club_id: '',
    };
  }

  componentDidMount() {
    // Lấy dữ liệu players từ API hoặc nguồn khác
    axios.get('http://localhost:3000/players')
      .then(response => {
        this.setState({ players: response.data });
      })
      .catch(error => {
        console.error('Lỗi khi lấy dữ liệu players:', error);
      });
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    var { players, name, country, club_id } = this.state;
    let search = players.filter(player => {
      const nameMatch = player.name.toLowerCase().includes(name.toLowerCase());
      const countryMatch = player.country.toLowerCase().includes(country.toLowerCase());
      const club_idMatch = player.club_id.toLowerCase().includes(club_id.toLowerCase());

      return nameMatch && countryMatch && club_idMatch;
    });
  
    return (
      <React.Fragment>
        <div>
          <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="contentt">
                <div className="btn-group mt-2 float-left a">
                </div>
                <div className="mt-3 float-left">
                  <input
                    className="form-control search mb-3 ml-5"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <input
                    className="form-control search mb-3 ml-5"
                    name="country"
                    value={country}
                    onChange={this.onChange}
                    type="search"
                    placeholder="Nationality"
                    aria-label="Nationality"
                  />
                  <input
                    className="form-control search mb-3 ml-5"
                    name="club_id"
                    value={club_id}
                    onChange={this.onChange}
                    type="search"
                    placeholder="Club"
                    aria-label="Club"
                  />
                </div>
                <table className="table table-bordered table-hover mt-6 ml-5">
                  <thead>
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">Image</th>
                      <th className="text-center">Tên Cầu Thủ</th>
                      <th className="text-center">Tuổi</th>
                      <th className="text-center">Quốc tịch</th>
                      

                    </tr>
                  </thead>
                  {/* <tbody>
                    {search.map((product, index) => {
                      return <Item key={index} index={index} product={product
                    } onDelete={this.onDelete} />;
                    
                    })}
                  </tbody> */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default  Searchinformation;
