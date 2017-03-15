import React, { Component } from 'react';

export default class Tree extends Component {

    componentDidMount() {
        //load data here
    }

    render() {

        // Define nodes array  
        var nodes = [
            { label: "Stanford", id: 0 },
            { label: "Living", id: 1 },
            { label: "Doing", id: 2 },
            { label: "Feeling", id: 3 },
            { label: "Thinking", id: 4 },
            { label: "Planning", id: 5 },
            { label: "Producing", id: 6 },
            { label: "Being", id: 7 }
        ]

        // Define arcs array 
        var arcs = [
            // Put node objects in array
            { source: 0, dest: 1, weight: 10 }, //0
            { source: 1, dest: 2, weight: 20 }, //1
            { source: 1, dest: 3, weight: 30 }, //2
            { source: 1, dest: 4, weight: 40 }, //3
            { source: 4, dest: 5, weight: 50 }, //4
            { source: 1, dest: 5, weight: 10 }, //5
            { source: 4, dest: 5, weight: 20 }, //6
            { source: 6, dest: 7, weight: 40 }, //7
        ]

        function writeTree(parentNode) {

            //#todo
              //this one is not showing up!
            if(parentNode==0){
                console.log("Not showing up: "+nodes[parentNode].label)
            }
            // however maybe this is done on purpose to hide our contributors?
            // if we want a tree with all contributors, it could be 
            // remedied by creating a arc file that starts with a single base node
            // that contains all contributors...this way we still start with writeTree(0)

            var exitArcs = new Array();
            for (var i = 0; i < arcs.length; i++) {
                if (arcs[i].source == parentNode) {
                    var isArcWithMostWeight=true; 
                    var chosenArc=arcs[i];
                    //run through all the arcs, 
                    arcs.map(function(a){
                        //this time looking for other dests with same source    
                        if(a.dest==chosenArc.dest){
                                //we find other dests with the same source
                                //now check weights of those arcs against ours to make sure it is the max weight 
                           
                                if(a.weight>chosenArc.weight){
                                    isArcWithMostWeight=false; 
                                }
                            }
                    })
                    if(isArcWithMostWeight){
                         exitArcs.push(arcs[i]);
                    }
                   
                }
            }

            var childNodes = exitArcs.map(function(i) {
                return nodes[i.dest];
            })

            var dependentNodes = childNodes;

            var nodesLIs = dependentNodes.map(function(node) {
                //recursively putting in the dest nodes as main nodes
                return ( <li key={node.id} > { node.label } <div> { writeTree(node.id) } </div> </li> );
            })
            var unorderedList = <ul> { nodesLIs } </ul>;
            return unorderedList;

        }

        return ( <div className = 'Tree' > { writeTree(0) } </div>);
        }
    }
