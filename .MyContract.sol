// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract ItemRegistry {
    struct Item {
        string name;
        string description;
        uint256 quantity;
        uint256 price;
        string photoUrl;
    }

    mapping(uint256 => Item) public items;
    uint256 public itemCount;

    function registerItem(
        string memory name,
        string memory description,
        uint256 quantity,
        uint256 price,
        string memory photoUrl
    ) public {
        itemCount++;
        items[itemCount] = Item(name, description, quantity, price, photoUrl);
    }
}