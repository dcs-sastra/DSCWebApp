import React from "react";
import data from "../../../Store";
import "./Cluster.css";

function importAll(r) {
  let images = {};
  r.keys().map(item => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const clusters = importAll(
  require.context("../../../assets/clusters", false, /\.(png|jpe?g|svg)$/)
);

export default function Clusters() {
  const clusterData = data.clusters.map((cluster, id) => {
    if (cluster) {
      return (
        <div className="col-md-3 col-sm-6" key={id}>
          <div className="card cluster_card">
            <img src={clusters[`${cluster.img}`]} alt="" />
            <div className={`card-overlay ${cluster.backgroundColor}`}>
              <div className="card-info ">{cluster.name}</div>
            </div>
          </div>
        </div>
      );
    }
  });
  return (
    <>
      <div className="clusters">
        <div className="container">
          <h3 className="text-center">Clusters</h3>
          <div className="divider cluster_divider"></div>
          {/* To change / add any clusters change the data in Store.js */}
          <div className="row cluster-collection">{clusterData}</div>
        </div>
      </div>
    </>
  );
}
