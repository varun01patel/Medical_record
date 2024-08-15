// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MedicalRecordManagement {
    address public owner;

    struct Record {
        address owner;
        string doctorName;
        string hospitalName;
        string reasonForVisit;
        string description;
        string fileUrl; // Store the URL of the file instead of a hash
        uint256 creationTime;
        uint256 updateTime;
        uint256 deletionTime;
    }

    mapping(address => Record[]) private records;

    event RecordCreated(address indexed owner, uint256 recordId);
    event RecordUpdated(address indexed owner, uint256 recordId);
    event RecordDeleted(address indexed owner, uint256 recordId);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    modifier recordExists(address _owner, uint256 _recordId) {
        require(_recordId < records[_owner].length, "Record does not exist");
        require(records[_owner][_recordId].deletionTime == 0, "Record is deleted");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function createRecord(
        string memory _doctorName,
        string memory _hospitalName,
        string memory _reasonForVisit,
        string memory _description,
        string memory _fileUrl
    ) public {
        address recordOwner = msg.sender;
        records[recordOwner].push(Record({
            owner: recordOwner,
            doctorName: _doctorName,
            hospitalName: _hospitalName,
            reasonForVisit: _reasonForVisit,
            description: _description,
            fileUrl: _fileUrl, // Store the URL directly
            creationTime: block.timestamp,
            updateTime: 0,
            deletionTime: 0
        }));

        emit RecordCreated(recordOwner, records[recordOwner].length - 1);
    }

    function updateRecord(
        uint256 _recordId,
        string memory _doctorName,
        string memory _hospitalName,
        string memory _reasonForVisit,
        string memory _description,
        string memory _fileUrl
    ) public recordExists(msg.sender, _recordId) {
        Record storage record = records[msg.sender][_recordId];
        record.doctorName = _doctorName;
        record.hospitalName = _hospitalName;
        record.reasonForVisit = _reasonForVisit;
        record.description = _description;
        record.fileUrl = _fileUrl; // Update the URL directly
        record.updateTime = block.timestamp;

        emit RecordUpdated(msg.sender, _recordId);
    }

    function deleteRecord(uint256 _recordId) public recordExists(msg.sender, _recordId) {
        records[msg.sender][_recordId].deletionTime = block.timestamp;
        emit RecordDeleted(msg.sender, _recordId);
    }

    function getDetailsByOwner(address _owner) public view returns (Record[] memory) {
        uint256 activeCount = 0;
        for (uint256 i = 0; i < records[_owner].length; i++) {
            if (records[_owner][i].deletionTime == 0) {
                activeCount++;
            }
        }

        Record[] memory activeRecords = new Record[](activeCount);
        uint256 j = 0;
        for (uint256 i = 0; i < records[_owner].length; i++) {
            if (records[_owner][i].deletionTime == 0) {
                activeRecords[j] = records[_owner][i];
                j++;
            }
        }
        return activeRecords;
    }
}