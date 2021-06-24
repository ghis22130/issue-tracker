//
//  SectionListCell.swift
//  IssueTracker
//
//  Created by Lia on 2021/06/20.
//

import UIKit

final class SectionListCell: UICollectionViewListCell {
    
    override func updateConfiguration(using state: UICellConfigurationState) {
        var newBgConfiguration = UIBackgroundConfiguration.listGroupedCell()
        newBgConfiguration.backgroundColor = .clear
        backgroundConfiguration = newBgConfiguration
        tintColor = .systemGray4
    }
    
}